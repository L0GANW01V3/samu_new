import { useEffect } from "react";

const Clients = () => {
  const logos = [
    "https://dummyimage.com/200x200/000/fff.png&text=Aryam+Sustainables",
    "https://dummyimage.com/200x200/000/fff.png&text=Property+Planners",
    "https://dummyimage.com/200x200/000/fff.png&text=CocoLife",
    "https://dummyimage.com/200x200/000/fff.png&text=PW",
    "https://dummyimage.com/200x200/000/fff.png&text=Pirajees",
    "https://dummyimage.com/200x200/000/fff.png&text=Aurus+Infra",
    "https://dummyimage.com/200x200/000/fff.png&text=Tirupati",
    "https://dummyimage.com/200x200/000/fff.png&text=Unacademy",
    "https://dummyimage.com/200x200/000/fff.png&text=Royal+Kidz",
  ];

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes scroll-up {
        0% { transform: translateY(0); }
        100% { transform: translateY(-50%); }
      }

      @keyframes scroll-down {
        0% { transform: translateY(-50%); }
        100% { transform: translateY(0); }
      }

      .marquee {
        overflow: hidden;
        position: relative;
        height: 480px; /* taller for bigger logos */
      }

      .marquee-content {
        display: flex;
        flex-direction: column;
      }

      .scroll-up {
        animation: scroll-up 20s linear infinite;
      }

      .scroll-down {
        animation: scroll-down 20s linear infinite;
      }

      .marquee-content:hover {
        animation-play-state: paused;
      }

      .logo-item {
        flex: 0 0 auto;
        margin: 0.1rem; /* very minimal gap */
      }

      .logo-item img {
        max-height: 140px; /* bigger logos */
        width: auto;
        border-radius: 1rem; /* rounded corners */
        object-fit: cover;
        display: block;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <section
      id="clients"
      className="py-24 bg-white rounded-t-[4rem] relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Logos: desktop */}
          <div className="scroll-reveal relative hidden lg:block">
            <div className="absolute -top-4 -left-4 w-36 h-36 bg-gradient-premium rounded-full opacity-30 -z-10"></div>

            <div className="grid grid-cols-3 gap-0">
              {[0, 1, 2].map((col) => (
                <div key={col} className="marquee">
                  <div
                    className={`marquee-content ${col === 1 ? "scroll-up" : "scroll-down"
                      }`}
                  >
                    {[...logos, ...logos].map((logo, i) => (
                      <div
                        key={`${col}-${i}`}
                        className="logo-item flex items-center justify-center"
                      >
                        <img
                          src={logo}
                          alt={`Client ${i + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side: text */}
          <div className="scroll-reveal">
            <h2 className="text-4xl text-secondary md:text-5xl font-bold">
              Our{" "}
              <span className="bg-gradient-premium bg-clip-text text-transparent [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mb-4">
                Clients
              </span>
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto mb-6">
              Powering growth for businesses across industries.
            </p>

            {/* Logos: mobile */}
            <div className="block lg:hidden mb-8">
              <div className="grid grid-cols-3 gap-0">
                {[0, 1, 2].map((col) => (
                  <div key={col} className="marquee">
                    <div
                      className={`marquee-content ${col === 1 ? "scroll-up" : "scroll-down"
                        }`}
                    >
                      {[...logos, ...logos].map((logo, i) => (
                        <div
                          key={`${col}-m-${i}`}
                          className="logo-item flex items-center justify-center"
                        >
                          <img
                            src={logo}
                            alt={`Client ${i + 1}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg text-secondary mb-4 leading-relaxed">
              At Mage Marketer, we believe that every brand has a unique journey
              to growth, and our mission is to guide you through it with
              carefully designed strategies. We combine deep market research,
              innovative tools, and creative storytelling to craft campaigns
              that resonate with your audience and drive measurable impact.
            </p>
            <p className="text-lg text-secondary leading-relaxed">
              Our approach is not just about running ads or creating content —
              it’s about weaving together the right mix of SEO, social media,
              design, and analytics into a cohesive roadmap. With Mage Marketer
              as your partner, you gain more than a service provider — you gain
              a growth curator dedicated to unlocking your full potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
