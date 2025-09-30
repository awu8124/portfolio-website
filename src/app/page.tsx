import Image from "next/image"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center">
      
      {/*Hero section (has temp colors and photo)*/}
      <header className="w-screen bg-blue-200 flex items-center justify-center py-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-center px-4 max-w-6xl mx-auto">
          <Image
            src="/bucky.jpg"
            alt="temp pfp"
            width={400}
            height={400}
            className="rounded-full border-4 border-red-500"
          />
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold">Alana Wu</h1>
            <p className="mt-4 text-lg text-gray-600">
              Software Engineering Undergraduate @ RIT
            </p>
          </div>
        </div>
      </header>

      {/*objective section*/}
      <div className="w-screen bg-red-200 flex flex-col items-center justify-center p-12">
        <h1 className="text-4xl font-bold">Objective</h1>
        <p className="mt-4 text-lg text-gray-600">
              naur
            </p>
      </div>

      {/*education section*/}
      <div className="w-screen bg-blue-200 flex flex-col items-center justify-center p-12">
        <h1 className="text-4xl font-bold">Education</h1>
        <p className="mt-4 text-lg text-gray-600">
              no D:
            </p>
      </div>

      {/*skills section*/}
      <div className="w-screen bg-red-200 flex flex-col items-center justify-center p-12">
        <h1 className="text-4xl font-bold">Skills</h1>
        <p className="mt-4 text-lg text-gray-600">
              no D:
            </p>
      </div>

      {/*project section projectcard components go here*/}
      <div className="w-screen bg-blue-200 flex flex-col items-center justify-center p-12">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="mt-4 text-lg text-gray-600">
              no D:
            </p>
      </div>

      {/*contact section*/}
      <div className="w-screen bg-red-200 flex flex-col items-center justify-center p-12">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <p className="mt-4 text-lg text-gray-600">
              dont.
            </p>
      </div>
    </main>
  )
}
