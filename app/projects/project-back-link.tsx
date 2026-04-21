'use client';

import { useRouter } from 'next/navigation';

type Props = {
  href: string;
  className?: string;
};

type DocumentWithViewTransition = Document & {
  startViewTransition?: (update: () => void) => { finished: Promise<void> };
};

export function ProjectBackLink({ href, className }: Props) {
  const router = useRouter();

  const onClick = () => {
    const doc = document as DocumentWithViewTransition;
    if (doc.startViewTransition) {
      doc.startViewTransition(() => {
        router.push(href);
      });
    } else {
      router.push(href);
    }
  };

  return (
    <button type="button" className={className} onClick={onClick} aria-label="Back to home">
      ←
    </button>
  );
}
