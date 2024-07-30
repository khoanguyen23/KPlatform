import { getProjectBySlug } from "@/lib/actions/project.actions";
import Image from "next/image";

const page = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const data = await getProjectBySlug({
    slug: params.slug,
  });
  if (!data) return null;
  console.log(data, "data returned");
  const videoId = data.youtubeUrl?.split("v=")[1];

  return (
    <>
      <section className="max-w-6xl pt-10 md:px-6 mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between text-sm text-slate-500">
            <span>
              {data.type}{" "}
              <span className="text-slate-300 dark:text-slate-800">|</span>{" "}
              {data.date}
            </span>
            <span>{data.views} views</span>
          </div>
          <h1 className="font-bold text-3xl mt-3 mb-6">
            <span
              data-br=":r3:"
              data-brr="1"
              style={{
                display: "inline-block",
                verticalAlign: "top",
                textDecoration: "inherit",
                maxWidth: "594px",
              }}
            >
              {data.title}
            </span>
          </h1>
          <div className="prose">
            <div dir="ltr" data-orientation="horizontal">
              <div
                data-state="active"
                data-orientation="horizontal"
                role="tabpanel"
                aria-labelledby="radix-:r4:-trigger-english"
                id="radix-:r4:-content-english"
                tabIndex={0}
                className="mt-2 rounded-md border border-slate-200 dark:border-slate-800 p-0 border-none -mx-4 md:mx-0 md:w-full"
              >
                <div className="relative max-w-full aspect-[16/9]">
                  {data.youtubeUrl ? (
                    <>
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        loading="lazy"
                        allow="fullscreen; picture-in-picture"
                        className="absolute top-0 left-0 w-full h-full rounded-md 
          transition-opacity duration-500 
          opacity-100"
                        title={data.title}
                      ></iframe>
                    </>
                  ) : (
                    <Image
                      src={data.image}
                      alt=""
                      fill
                      className="w-full h-full object-cover rounded-lg"
                    />
                  )}
                </div>
              </div>
            </div>
            <h2
              className="text-xl md:text-2xl font-bold mt-10 text-slate-800 dark:text-slate-300"
              id="hi-there"
            >
              <a className="anchor" href="#hi-there">
                <span className="icon icon-link"></span>
              </a>
              Hello!
            </h2>
            <p className="mt-5 leading-7 text-slate-700 dark:text-slate-300">
              {data.description}
            </p>
            <div className="bg-green-500/5 dark:bg-opacity-20 undefined expandable-callout px-4 py-1 sm:px-8 my-8 relative rounded-lg">
              <div className="relative">
                <div className="my-3 text-slate-600 dark:text-slate-400">
                  <p className="mt-5 leading-7 text-slate-700 dark:text-slate-300">
                    🧙‍♂️ <strong>Want to become a master in React Native?</strong>{" "}
                    Check the{" "}
                    <a
                      className="font-medium underline underline-offset-4 text-sky-500"
                      href="/learn"
                    >
                      React Native Course
                    </a>
                  </p>
                  <p className="mt-5 leading-7 text-slate-700 dark:text-slate-300">
                    Also, don&apos;t forget to explore the{" "}
                    <a
                      className="font-medium underline underline-offset-4 text-sky-500"
                      href="/learnReact"
                    >
                      React with TypeScript Course
                    </a>
                    , where we master TypeScript, handle payments, and deploy
                    scalable applications.{" "}
                    <a
                      className="font-medium underline underline-offset-4 text-sky-500"
                      href="/learnReact"
                    >
                      Learn more
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
