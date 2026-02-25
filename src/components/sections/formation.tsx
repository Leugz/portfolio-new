import { formationData } from '@/data/formationData';

const FormationCard = ({
  formation,
}: {
  formation: (typeof formationData)[0];
}) => (
  <div className='flex flex-col gap-4 max-w-2xl'>
    <div>
      <div className='flex flex-row items-center justify-between text-indigo'>
        <h3 className='text-3xl font-semibold uppercase'>
          {formation.institution}
        </h3>
        <p className='text-lg'>{formation.time}</p>
      </div>
      <div className='text-xl font-semibold text-purple uppercase'>
        {formation.type}
      </div>
    </div>
    <p>{formation.course}</p>
    <p className='text-gray-600'>{formation.status}</p>
  </div>
);

export default function Formation() {
  return (
    <section id='formation' className='section-style gap-12'>
      <h2 className='text-4xl uppercase font-bold'>Formação</h2>
      <div className='flex flex-col gap-12'>
        {[...formationData].reverse().map((formation, idx) => (
          <FormationCard key={idx} formation={formation} />
        ))}
      </div>
    </section>
  );
}
