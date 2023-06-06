
const ContactForm = () => {
   return (
      <div className='my-10'>


         <section className="bg-gray-100">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
               <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                  <div className="lg:col-span-2 lg:py-12">
                     <p className="max-w-xl text-3xl font-semibold">
                        Wants to Post a News?
                     </p>
                     <p>
                        Contact with us.
                     </p>

                     <div className="mt-8">
                        <a href="" className="text-2xl font-bold text-pink-600">
                           0151 475 4450
                        </a>

                        <address className="mt-2 not-italic">
                           02 Khulna, Bangladesh. <br />
                           GPO 9000.
                        </address>
                     </div>
                  </div>

                  <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                     <form action="" className="space-y-4">
                        <div>
                           <label className="sr-only" htmlFor="name">Name</label>
                           <input
                              className="w-full rounded-lg border-gray-200 p-3 text-sm"
                              placeholder="Name"
                              type="text"
                              id="name"
                           />
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                           <div>
                              <label className="sr-only" htmlFor="email">Email</label>
                              <input
                                 className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                 placeholder="Email address"
                                 type="email"
                                 id="email"
                              />
                           </div>

                           <div>
                              <label className="sr-only" htmlFor="phone">Phone</label>
                              <input
                                 className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                 placeholder="Phone Number"
                                 type="tel"
                                 id="phone"
                              />
                           </div>
                        </div>

                        <fieldset className="w-full space-y-1 dark:text-gray-100">
                           <label for="files" className="block text-sm font-medium">Attachments</label>
                           <div className="flex">
                              <input type="file" name="files" id="files" className="px-8 py-6 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" />
                           </div>
                        </fieldset>

                        <div>
                           <label className="sr-only" htmlFor="message">Message</label>

                           <textarea
                              className="w-full rounded-lg border-gray-200 p-3 text-sm"
                              placeholder="Message"
                              rows="4"
                              id="message"
                           ></textarea>
                        </div>

                        <div className="mt-4">
                           <button
                              type="submit"
                              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                           >
                              Send Enquiry
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default ContactForm;