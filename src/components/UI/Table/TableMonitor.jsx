import {AiFillCaretLeft,AiFillCaretRight} from 'react-icons/ai'
import { daysInWeek } from '../../../constanst'

const TableMonitor = ({today}) => {

  return (
    <div className='flex flex-col gap-2 text-[14px]'>
      <section className='flex justify-between items-center'>
        <article className='flex gap-[.3em]'>
          <h3 className='text-[16px]'>{today.format('MMMM')}</h3>
          <h3 className='text-[16px]'>{today.format('YYYY')}</h3>
        </article>
        <article className='flex gap-2'>
          <button className='p-2 rounded-full hover:bg-gray-100'><AiFillCaretLeft className='text-gray-400  '/></button>
          <button className='p-2 rounded-full hover:bg-gray-100'><AiFillCaretRight className='text-gray-400  '/></button>
        </article>
      </section>
      <section className='flex'>
        {daysInWeek.map((el) => (
          <h4 className='w-[2.14em]  text-gray-500 flex justify-center'>{el.slice(0,2)}</h4>
        ))}
      </section>
    </div>
  )
}

export default TableMonitor