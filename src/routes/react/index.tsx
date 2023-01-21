import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { MUIButton } from '~/integrations/react/mui';

export default component$(() => {
  const count = useSignal(0);

  return (
    <>
      <h1>Qwik/React mother of all demos</h1>

      <MUIButton variant={'contained'} host:onClick$={() => void count.value++}>
        Slider is {count.value}
      </MUIButton>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Qwik React',
};
