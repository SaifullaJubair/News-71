import { Modal } from 'flowbite-react';
import React from 'react';

const ConformationModal = () => {
   return (
      <div>
         <React.Fragment>
            <Button onClick={onClick}>
               Toggle modal
            </Button>
            <Modal
               show={false}
               size="md"
               popup={true}
               onClose={onClose}
            >
               <Modal.Header />
               <Modal.Body>
                  <div className="text-center">
                     <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                     <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Are you sure you want to delete this product?
                     </h3>
                     <div className="flex justify-center gap-4">
                        <Button
                           color="failure"
                           onClick={onClick}
                        >
                           Yes, I'm sure
                        </Button>
                        <Button
                           color="gray"
                           onClick={onClick}
                        >
                           No, cancel
                        </Button>
                     </div>
                  </div>
               </Modal.Body>
            </Modal>
         </React.Fragment>
      </div>
   );
};

export default ConformationModal;