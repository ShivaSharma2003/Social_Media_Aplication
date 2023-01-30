import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {CloseSearchModalAction} from '../../Redux/Actions/ModalAction'
import SearchBody from '../Search/SearchBody'

export default function MyModal() {
  const dispatch = useDispatch()

  const {SearchModal} = useSelector(state => state.SearchModal)

  function closeModal() {
    dispatch(CloseSearchModalAction())
  }

  return (
    <>
      <Transition appear show={SearchModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-full w-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full h-[90%] max-w-md transform overflow-scroll scrollbar-hide rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <SearchBody />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
