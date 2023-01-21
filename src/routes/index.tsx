import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { MUIButton, MUITextField } from '../integrations/react/mui';

export default component$(() => {
  const count = useSignal(0);
  const increment = useSignal(1);

  return (
    <div class="container mx-auto flex flex-col gap-4">
      <h1>
        Welcome to Qwik :0<span class="lightning">⚡️</span>
      </h1>
      <MUITextField
        label="Name"
        variant="filled"
        id="filled-basic"
        type="number"
        client:visible
        onChange$={(e) => {
          increment.value = Number(e.target.value);
        }}
        value={increment.value}
      />
      <MUIButton
        host:onClick$={() => void (count.value += Number(increment.value))}
        variant="outlined"
        client:hover
      >
        +{increment.value}
      </MUIButton>
      <h2>{count.value}</h2>
    </div>
  );
});

export const head = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
} satisfies DocumentHead;
