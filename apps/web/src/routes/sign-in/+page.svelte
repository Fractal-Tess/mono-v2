<script lang="ts">
  import * as m from '$lib/paraglide/messages.js';
  import SignInForm from './_components/SignInForm.svelte';
  import SignInHeader from './_components/SignInHeader.svelte';
  import SocialButtons from './_components/SocialButtons.svelte';
  import TermsFooter from './_components/TermsFooter.svelte';
</script>

<div
  class="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10"
>
  <div class="w-full max-w-sm">
    <div class="flex flex-col gap-6">
      <form>
        <div class="flex flex-col gap-6">
          <SignInHeader />
          <SignInForm />
          <div
            class="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t"
          >
            <span
              class="bg-background text-muted-foreground relative z-10 px-2"
            >
              {m['sign_in.or']()}
            </span>
          </div>
          <SocialButtons />
        </div>
      </form>
      <TermsFooter />
    </div>
  </div>
</div>
