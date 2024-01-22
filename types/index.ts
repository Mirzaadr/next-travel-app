export interface NavbarProps {
  
}

export interface FooterProps {

}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'submit'
  title: string
  icon?: string
  variant: string
  full?: boolean
}

export interface CampsiteProps {
  backgroundImage: string
  title: string
  subtitle: string
  peopleJoined: string
}

export interface FeatureItemProps {
  title: string
  icon: string
  variant: string
  description: string
}

export interface FooterColumnProps {
  children: React.ReactNode
  title: string
}