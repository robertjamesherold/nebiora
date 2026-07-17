import Components from '@components';
import Icons from '@icons';
import { Link } from 'react-router-dom';

import Ui from '@/ui';

import type { PageHeroProps } from './PageHero.types';

const PageHero = ({ breadcrumb, eyebrow, heading, description, buttons, stats, className = '' }: PageHeroProps) => (
  <section className="px-6 pt-36 pb-20 sm:pt-40 sm:pb-24">
    <div className={`mx-auto max-w-6xl ${className}`}>
      {breadcrumb && (
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-400">
            {breadcrumb.map((item, index) => {
              const isLast = index === breadcrumb.length - 1;

              return (
                <li
                  key={item.label}
                  className="flex items-center gap-2"
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.to && !isLast ? (
                    <Link to={item.to} className="transition-colors hover:text-star-50">
                      {item.label}
                    </Link>
                  ) : (
                    <span className={isLast ? 'text-star-50' : ''}>{item.label}</span>
                  )}
                  {!isLast && (
                    <Icons.ChevronRight size="xs" className="text-ink-600" aria-hidden="true" />
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      )}
      <Ui.Badge label={eyebrow} style="primary" className="mb-6" />
      <Ui.Text as="h1" variant="h1" className="max-w-3xl" text={Array.isArray(heading) ? heading.join(' ') : heading} />
      <Ui.Text variant="lead" className="mt-6 max-w-2xl" text={description} />
      {buttons && (
        <div className="mt-10 flex flex-wrap gap-4">
          {buttons.map((button, index) => (
            <Ui.Buttons key={index} {...button} />
          ))}
        </div>
      )}
      {stats && <Components.StatsGrid stats={stats} className="mt-16 max-w-2xl" />}
    </div>
  </section>
);

export default PageHero;
