import Layout from '@/components/Layout';
import Experience from '@/components/sections/experience';
import Introduction from '@/components/sections/introduction';
import Formation from '@/components/sections/formation';
import Skills from '@/components/sections/skills';

export default function Home() {
  return (
    <Layout>
      <Introduction />
      <Experience />
      <Formation />
      <Skills />
    </Layout>
  );
}
