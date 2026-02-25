import { experienceData } from '@/data/experienceData';

export default function Experience() {
  return (
    <section
      id='exp'
      className='w-full min-h-screen flex flex-col justify-center p-12 gap-12'
    >
      <h2 className='text-4xl uppercase font-bold'>Experiência</h2>
      <div className='grid grid-cols-2 gap-8'>
        {experienceData.map((exp) => (
          <div key={exp.role} className='flex flex-col gap-6'>
            <div>
              <h3 className='text-3xl font-semibold text-indigo uppercase'>
                {exp.role}
              </h3>
              <div className='text-xl font-semibold text-purple uppercase'>
                {exp.period}
              </div>
            </div>
            {exp.descriptions.map((desc, idx) => (
              <p key={idx}>{desc}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
