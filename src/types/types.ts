export interface PhotoData {
  alt: string
  url: string
  width: number
  height: number
  mimeType: string
  thumb?: PhotoData
}

export interface ProjectMember {
  id: number
  name: string
  photo: PhotoData
  github_link?: string
  linkedin_link?: string
}

export interface ProjectMembers {
  id: string
  member: ProjectMember
}

export interface PartnerCompanyData {
  name: string
  photo: PhotoData
}

export interface PartnerCompaniesData {
  id: string
  partner_company: PartnerCompanyData
}
