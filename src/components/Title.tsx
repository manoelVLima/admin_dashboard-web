interface TitleProps {
    title: string;
    subtitle: string;
}
export default function Title({title, subtitle}:TitleProps) {
  return (
    <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
    </div>
  )
}

