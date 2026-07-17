type SectionHeadingAlign = 'left' | 'center' | 'right';
type SectionHeadingSize = 'md' | 'lg';

type SectionHeadingProps = {
  category: string;
  heading: string | [string, string];
  description?: string;
  align?: SectionHeadingAlign;
  size?: SectionHeadingSize;
  className?: string;
};

export type { SectionHeadingAlign, SectionHeadingProps, SectionHeadingSize };
