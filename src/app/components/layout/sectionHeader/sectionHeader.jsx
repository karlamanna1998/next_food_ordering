export default function SectionHeader({mainHeading , subHeading}){
    return (
      <>
       <h3 className="uppercase text-gray-500 font-semibold leading-4">{subHeading}</h3>
        <h2 className="text-primary font-bold text-4xl italic">{mainHeading}</h2>
      </>
    )
}