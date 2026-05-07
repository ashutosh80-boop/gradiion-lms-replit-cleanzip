---
import BaseLayout from "../layouts/BaseLayout.astro";

const description = "Your Gradiion application has been received. If your profile is aligned, next steps will be sent.";
---
<BaseLayout title="Application Received | Gradiion" description={description} bodyClass="theme-gate">
  <section class="page-hero page-hero--compact gate-surface">
    <div class="section-inner section-inner--single">
      <div class="section-copy">
        <h1>Application received.</h1>
        <p>If your profile is aligned, next steps will be sent.</p>
        <p>No further action is required at this stage.</p>
      </div>
    </div>
  </section>
</BaseLayout>
