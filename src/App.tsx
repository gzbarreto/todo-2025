import Text from "./components/text"

export default function App() {
  return (
    <div className="flex flex-col gap-2">
      <Text variant={"body-sm-bold"} className="text-pink-base">
        Hello World!
      </Text>
      <Text variant={"body-md"} className="text-green-base">
        Hello World!
      </Text>
      <Text variant={"body-md-bold"} className="text-green-base">
        Hello World!
      </Text>
    </div>
  )
}
