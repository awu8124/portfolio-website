import Image from "next/image"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center">
      
      <header className="w-screen h-screen bg-blue-200 flex items-center justify-center">
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

    </main>
  )
}
