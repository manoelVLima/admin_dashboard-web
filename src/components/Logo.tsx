
export default function Logo() {
  return (
    <div className="bg-white w-10 h-10 rounded-full flex flex-col items-center justify-center">
        <div className="h-3 w-3 rounded-full bg-red-300 mb-0.5" />
        <div className="flex mt-0.5">   
            <div className="h-3 w-3 rounded-full bg-yellow-500 mr-0.5" />
            <div className="h-3 w-3 rounded-full bg-green-600 ml-0.5" />
        </div>
    </div>
  )
}
