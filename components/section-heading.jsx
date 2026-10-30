export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="text-sm font-medium uppercase tracking-widest text-purple-400 mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      {description && <p className="mt-4 max-w-2xl text-gray-400 leading-relaxed">{description}</p>}
    </div>
  )
}
