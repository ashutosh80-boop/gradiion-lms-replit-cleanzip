---
import BaseLayout from "../layouts/BaseLayout.astro";

const description = "Gate 0 is the first access point into Gradiion. Complete the orientation before application access.";
---
<BaseLayout title="Gate 0 | Gradiion Orientation" description={description} bodyClass="theme-gate">
  <section class="page-hero gate-surface asset-gate-hero">
    <div class="section-inner">
      <div class="section-copy">
        <p class="eyebrow">Gate 0 Orientation</p>
        <h1>If the gap is familiar, start here.</h1>
        <div class="body-stack">
          <p>Gradiion is not open access.</p>
          <p>Before you can apply, complete this short orientation.</p>
          <p>It explains what Gradiion trains, who it is built for, and who should not continue.</p>
          <p>This orientation is for professionals who recognize that capability must hold when responsibility, scrutiny, and consequence increase.</p>
          <p>It is not for people looking for motivation, passive content, or another credential.</p>
        </div>
      </div>
      <aside class="video-card">
        <p class="eyebrow">Gate 0 Orientation</p>
        <h2>Required Before Application Access</h2>
        <div class="video-placeholder">Orientation video placeholder.<br />Replace with final embed.</div>
        <div class="cta-row">
          <a class="cta-button" href="/application/" data-event="application_start">Unlock Application</a>
        </div>
        <p class="muted">Complete the orientation to unlock the application form.</p>
        <p class="muted">Available after orientation is complete.</p>
      </aside>
    </div>
  </section>
</BaseLayout>
