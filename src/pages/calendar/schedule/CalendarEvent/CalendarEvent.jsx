import { AnimatePresence, motion } from "framer-motion"

const CalendarEvent = ({isOpenEvent, setIsOpenEvent }) => {
  return (
    <div
      className="absolute z-50 w-full h-[100vh]  flex justify-end"
      onClick={() => setIsOpenEvent((prev) => !prev)}
    >
      <AnimatePresence>
        {isOpenEvent && (
          <motion.div
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            exit={{ x: 500 }}
            transition={{ duration: 0.5 }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className={`bg-white h-[100vh] z-50 w-[20em] shadow-lg `}
            >
              <div className="content"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CalendarEvent