function ContactForm() {
  return (
    <section className="relative max-w-[1440px] bg-[#f9f9f9]">
      <div className="flex max-w-[1440px] flex-col justify-center gap-6 overflow-hidden bg-[url('assets/images/contact-form/email_sign_up.webp')] p-6 md:py-[86px]">
        <div className="flex flex-col items-center justify-start gap-[30px]">
          <div className="relative flex flex-col items-center justify-start gap-3">
            <h2 className="text-center font-clash-display text-headline-two text-white">
              Join the club and get the benefits
            </h2>
            <p className="text-center text-lg text-white">
              Sign up for our newsletter and receive exclusive offers on new
              ranges, sales, pop up stores and more
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-2 md:flex-row md:flex-wrap md:justify-start md:gap-9">
            <div className="relative flex items-center justify-start gap-2">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative size-4"
                preserveAspectRatio="xMidYMid meet"
              >
                <rect
                  width={16}
                  height={16}
                  fill="white"
                  style={{ mixBlendMode: "multiply" }}
                />
                <path
                  d="M8 1C6.61553 1 5.26216 1.41054 4.11101 2.17971C2.95987 2.94888 2.06266 4.04213 1.53285 5.32122C1.00303 6.6003 0.86441 8.00777 1.13451 9.36563C1.4046 10.7235 2.07129 11.9708 3.05026 12.9497C4.02922 13.9287 5.2765 14.5954 6.63437 14.8655C7.99224 15.1356 9.3997 14.997 10.6788 14.4672C11.9579 13.9373 13.0511 13.0401 13.8203 11.889C14.5895 10.7378 15 9.38447 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1ZM7 10.7954L4.5 8.2954L5.2953 7.5L7 9.2046L10.705 5.5L11.5029 6.29295L7 10.7954Z"
                  fill="white"
                />
              </svg>
              <p className="text-center text-base text-white">
                Exclusive offers
              </p>
            </div>
            <div className="relative flex items-center justify-start gap-2">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative size-4 shrink-0 grow-0"
                preserveAspectRatio="xMidYMid meet"
              >
                <rect
                  width={16}
                  height={16}
                  fill="white"
                  style={{ mixBlendMode: "multiply" }}
                />
                <path
                  d="M8 1C6.61553 1 5.26216 1.41054 4.11101 2.17971C2.95987 2.94888 2.06266 4.04213 1.53285 5.32122C1.00303 6.6003 0.86441 8.00777 1.13451 9.36563C1.4046 10.7235 2.07129 11.9708 3.05026 12.9497C4.02922 13.9287 5.2765 14.5954 6.63437 14.8655C7.99224 15.1356 9.3997 14.997 10.6788 14.4672C11.9579 13.9373 13.0511 13.0401 13.8203 11.889C14.5895 10.7378 15 9.38447 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1ZM7 10.7954L4.5 8.2954L5.2953 7.5L7 9.2046L10.705 5.5L11.5029 6.29295L7 10.7954Z"
                  fill="white"
                />
              </svg>
              <p className="text-center text-base text-white">Free events</p>
            </div>
            <div className="relative flex items-center justify-start gap-2">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative size-4 shrink-0 grow-0"
                preserveAspectRatio="xMidYMid meet"
              >
                <rect
                  width={16}
                  height={16}
                  fill="white"
                  style={{ mixBlendMode: "multiply" }}
                />
                <path
                  d="M8 1C6.61553 1 5.26216 1.41054 4.11101 2.17971C2.95987 2.94888 2.06266 4.04213 1.53285 5.32122C1.00303 6.6003 0.86441 8.00777 1.13451 9.36563C1.4046 10.7235 2.07129 11.9708 3.05026 12.9497C4.02922 13.9287 5.2765 14.5954 6.63437 14.8655C7.99224 15.1356 9.3997 14.997 10.6788 14.4672C11.9579 13.9373 13.0511 13.0401 13.8203 11.889C14.5895 10.7378 15 9.38447 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1ZM7 10.7954L4.5 8.2954L5.2953 7.5L7 9.2046L10.705 5.5L11.5029 6.29295L7 10.7954Z"
                  fill="white"
                />
              </svg>
              <p className="text-center text-base text-white">
                Large discounts
              </p>
            </div>
          </div>
        </div>
        <form className="flex w-full max-w-[484px] items-start justify-start self-center ">
          <input
            type="email"
            name="email"
            placeholder="your-email@example.com"
            className="inline-block w-full bg-light-grey p-4 text-left text-base text-dark-primary ring ring-inset ring-primary/15 placeholder:text-dark-primary/20"
          />
          <button
            className="inline-flex shrink-0 grow-0 cursor-pointer bg-dark-primary px-8 py-4 text-left text-base text-white ring-2 ring-inset ring-primary/15 hover:bg-[#1E193E] focus:border-primary"
            type="submit"
          >
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
