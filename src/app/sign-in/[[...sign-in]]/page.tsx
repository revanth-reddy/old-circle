import { SignIn } from "@clerk/nextjs";
import SeoMeta from "@/partials/SeoMeta";

export default function Page() {
  return (
  <>
    <SeoMeta title={"Sign In"} />
    <section className="section-sm text-center">
      <div className="my-20 container">
        <div className="row justify-center">
          <div className="sm:col-8 md:col-6 lg:col-4">
            <span className="text-[8rem] block font-bold text-dark dark:text-darkmode-dark">
              <SignIn />
            </span>
          </div>
        </div>
      </div>
    </section>
  </>
  );
};