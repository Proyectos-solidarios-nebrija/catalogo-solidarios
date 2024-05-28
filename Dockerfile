FROM node:20-alpine AS base

FROM base as builder

WORKDIR /app

COPY . .

RUN npm install --frozen-lockfile
RUN npm run build

FROM base as runtime

ENV HOST=0.0.0.0
ENV PORT=4321

COPY --from=builder /app ./dist

EXPOSE 4321
CMD node ./dist/server/entry.mjs