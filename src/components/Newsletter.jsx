export default function Newsletter() {
  return (
    <section
      className="newsletter-section section-shell"
      id="enquiry"
    >
      <div className="newsletter-panel">
        <div>
          <span className="section-kicker">
            Product enquiries
          </span>

          <h2>
            Build your hospitality
            collection with ISKO.
          </h2>

          <p>
            Leave your email for product information,
            sample requests and hospitality collection
            updates.
          </p>
        </div>

        <form
          className="newsletter-form"
          onSubmit={(event) =>
            event.preventDefault()
          }
        >
          <label htmlFor="enquiry-email">
            Email address
          </label>

          <div>
            <input
              id="enquiry-email"
              type="email"
              placeholder="name@company.com"
            />

            <button type="submit">
              Send enquiry
              <span>↗</span>
            </button>
          </div>

          <small>
            Prototype form — backend connection can be
            added later.
          </small>
        </form>
      </div>
    </section>
  );
}
