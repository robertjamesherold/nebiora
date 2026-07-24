import Ui from '@/ui';

import type { ProcessTimelineProps } from './ProcessTimeline.types';

const ProcessTimeline = ({
  steps,
  orientation = 'vertical',
  className = '',
}: ProcessTimelineProps) => {
  const isHorizontal = orientation === 'horizontal';

  return (
    <ol
      className={`flex flex-col gap-10 ${isHorizontal ? 'lg:flex-row md:gap-6' : ''} ${className}`}
    >
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;

        return (
          <li
            key={step.title}
            className={
              isHorizontal
                ? 'relative flex flex-1 flex-col items-center  gap-4 overflow-visible'
                : 'relative flex gap-6 overflow-visible'
            }
          >
            {!isLast && (
              <div
                aria-hidden="true"
                className={
                  isHorizontal
                    ? 'absolute top-6 left-[calc(50%+1.5rem)] hidden h-px w-[calc(100%-1.5rem)] bg-ink-800 lg:block '
                    : 'absolute top-12 left-6 h-[calc(100%-0.5rem)] w-px bg-ink-800 '
                }
              />
            )}
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-brand-500/40 bg-brand-500/10 text-brand-200">
              {step.icon ? (
                <Ui.Icon strokeWidth={1.6} className="size-5">
                  {step.icon}
                </Ui.Icon>
              ) : (
                <Ui.Text
                  variant="indexLabel"
                  className="text-base"
                  text={String(index + 1).padStart(2, '0')}
                />
              )}
            </div>
            <div className={isHorizontal ? 'flex flex-col text-center' : 'flex flex-col justify-center'}>
              <Ui.Text as="h3" variant="h3" text={step.title} />
              <Ui.Text variant="body" className="mt-1 leading-relaxed max-w-sm lg:max-w-fit" text={step.description} />
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default ProcessTimeline;
