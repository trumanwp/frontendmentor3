import './App.css'

function App() {


  return (
      <div className="bg-blue-200 w-full h-screen flex flex-col items-center justify-center">
          <section className="overflow-hidden rounded-2xl">
              <div className="bg-white h-1/2 p-12">
                  <h1 className="text-teal-500 font-bold pb-4">Join our community</h1>
                  <h2 className="text-green-400">30-day, hassle-free money back guarantee</h2>
                  <p className="text-gray-500">Gain access to our ful library of tutorials along with expert code reviews.</p>
                  <p className="text-gray-500">Perfect for any developers who are serious about honing their skills.</p>
              </div>

              <section className="bottom h-1/2 flex flex-row w-full">

                  <div className="bg-teal-600 w-full flex flex-col p-6">
                      <h2 className="text-white mb-4">Monthly Subscription</h2>

                      <div className="flex flex-row align-middle items-center gap-2">
                          <h1 className="text-white text-2xl">$29</h1>
                          <h3 className="text-gray-300">per month</h3>
                      </div>

                      <p className="text-white mb-4">Full access for less than $1 a day</p>

                      <button className="text-white bg-green-400 p-2 rounded">Sign Up</button>
                  </div>

                  <div className="bg-teal-500 w-full p-6 ">
                      <h2 className="text-white mb-4">Why Us</h2>

                      <div className="text-gray-300 font-light text-xs">
                          <p>Tutorials by industry experts</p>
                          <p>Peer & Expert code review</p>
                          <p>Coding exercises</p>
                          <p>Access to our GitHub repos</p>
                          <p>Community Forum</p>
                          <p>Flashcard decks</p>
                          <p>New videos every week</p>
                      </div>
                  </div>
              </section>
          </section>
      </div>

  )
}

export default App
