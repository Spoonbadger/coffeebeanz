import Image from "next/image";
import { useState } from 'react'


const LearnDrawer = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
  <>
    <button
      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      onClick={() => setIsOpen(true)}
    >
      <Image
        aria-hidden
        src="/file.svg"
        alt="File icon"
        width={16}
        height={16}
      />
      Learn
    </button>

    <div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        >
          <div className="fixed right-0 top-0 h-full w-[90%] sm:w-[50%] bg-white shadow-lg p-0 sm:p-6 transition-transform duration-3000">
            <div className="bg-white p-6 rounded-xl shadow-xl max-w-md max-w-lg w-full overflow-y-auto flex-1">
              <h2 className="text-lg font-semibold mb-4 text-gray-700">How <span className="text-stone-800 font-bold italic">BeanCoffeeTasting</span> Works</h2>
              <div className="text-sm text-gray-700">
                <p className="underline">Matching</p>
                <p>
                  Every coffee in our collection is rated across five flavor dimensions: bitter, nutty, sweet, fruity, and floral. When you set your preferences—either using the simple slider or the detailed flavor chart—we turn them into a set of numbers.
                </p><br/>
                <p className="underline">Behind the Scenes</p>
                <p>
                  We then compare your taste profile to each coffee using Euclidean distance, a mathematical way to measure how close two sets of values are in multi-dimensional space.
                </p><br/>
                <p className="underline">What is Euclidean Distance?</p>
                <p>
                  📐 Euclidean distance is a way to calculate how similar two sets of numbers are — in this case, your flavor preferences and a coffee&apos;s flavor profile. The smaller the distance, the closer the match.
                </p><br/>
                <p>
                  This lets us rank coffees by how closely they align with your preferences, helping you discover beans you&apos;re more likely to enjoy.
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 px-4 py-2 bg-stone-300 text-white rounded hover:bg-stone-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  </>
  )
}

export default LearnDrawer

// delete this comment