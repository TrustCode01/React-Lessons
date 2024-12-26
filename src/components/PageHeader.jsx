import Typewriter from "./Typewriter";

export default function PageHeader({ title, image }) {
  const sentences =[
    'Welcome to Glad Tidings Tariro assembly',
    'Where we evangelize to the world',
    'We are Inspired to make desciples',
    'Dedicated to equiping the saints',
    'Always inspired by The Great Commission'
  ]
  return (
    <div className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative h-full flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-white">{title}</h1>
        <Typewriter texts={sentences} speed={50}/>
      </div>
    </div>
    
  );
}

    {
      /**
       <div className="relative h-[50vh]">
      <picture>
        <source media="(min-width:1400px )" srcset={imageXL} />
        <source media="(min-width:1000px )" srcset={imageL}/>
        <source media="(min-width:700px )" srcset={imageMD}/>
        <source media="(min-width:501px)" srcset={imageSM} />
        <source media="(min-width:500px)" srcset={imageXS}/>
        <img src={image} className="w-full max-w-[100%] max-h-[60vh] absolute" alt={title} />
      </picture>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative h-full flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white">{title}</h1>
      </div>
    </div>
       */
    }