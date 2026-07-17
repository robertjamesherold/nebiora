import Components from '@components';

import Ui from '@/ui';

import StoryData from './Story.data';

const Story = () => (
  <section className="px-6 py-20 sm:py-28">
    <div className="mx-auto max-w-6xl">
      <Components.SectionHeading category={StoryData.category} heading={StoryData.heading} align="left" />

      <div className="mt-10 flex max-w-3xl flex-col gap-6">
        {StoryData.paragraphs.map((paragraph) => (
          <Ui.Text key={paragraph} variant="body" text={paragraph} />
        ))}
      </div>
    </div>
  </section>
);

export default Story;
