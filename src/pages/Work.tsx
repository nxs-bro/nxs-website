import Section, { SectionLabel, SectionTitle } from "@/components/Section";

const driveVideos = [
  "1I3rjVefKFbY5OAZ6Hc4z6AfFj3X341LZ",
  "13YBXft4wLkMirdiRNGcIxVogC1JnBZS_",
  "1Ss3l42qSJ2E0Z4GnoWSaSdDiEPQtf7mo",
];

const Work = () => {
  return (
    <div className="pt-20">
      <Section>
        <SectionLabel>Our Work</SectionLabel>
        <SectionTitle>Content that <span className="text-primary">performs</span>.</SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {driveVideos.map((id) => (
            <div key={id} className="glass-card overflow-hidden rounded-xl">
              <div className="aspect-[9/16]">
                <iframe
                  src={`https://drive.google.com/file/d/${id}/preview`}
                  title="Video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Work;
