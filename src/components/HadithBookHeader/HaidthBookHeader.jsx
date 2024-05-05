import SearchBar from "../Searchbar/Searchbar";


const HaidthBookHeader = () => {
    return (
        <div className="header flex justify-between items-center p-5">
            <div className="intro flex justify-between items-center w-[215px]">
                <img className="w-11 h-11 md-mx:w-9 md-mx:h-9" src="https://ihadis.com/assets/home-logo.png" alt="" />
                <div>
                    <h3 className="text-xl font-bold text-black ">হাদিস সমূহ</h3>
                    <h6 className="text-sm text-[#404040]">হাদিস পড়ুন শিখুন এবং জানুন</h6>
                </div>
            </div>
            <div className="siderBar w-[390px] flex justify-between items-center">
                <div className="searchSection">
                    <SearchBar placeholder="Search Hadith" mt="mt-0px" w="w-270px" border={true} />
                </div>
                <div className="2xl-min:hidden block cursor-pointer">


                    <div className="settingIcon rounded-lg w-10 h-10 bg-[#2B9E76] flex items-center justify-center">
                        {/* <p>dd</p> */}
                        <svg className="fill-white bg-inherit rounded-lg" width="40" height="40" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M22.2693 12.3894C21.818 10.5369 19.1817 10.5369 18.7304 12.3894C18.6631 12.6678 18.5309 12.9263 18.3448 13.144C18.1586 13.3616 17.9237 13.5322 17.6591 13.642C17.3946 13.7517 17.1078 13.7974 16.8223 13.7753C16.5367 13.7533 16.2604 13.6642 16.0158 13.5152C14.3865 12.5224 12.5221 14.3868 13.5149 16.0161C14.1561 17.0682 13.5873 18.441 12.3903 18.7319C10.5366 19.182 10.5366 21.8195 12.3903 22.2684C12.6687 22.3358 12.9273 22.4681 13.145 22.6544C13.3626 22.8407 13.5332 23.0758 13.6428 23.3405C13.7524 23.6052 13.798 23.892 13.7757 24.1777C13.7535 24.4633 13.6641 24.7397 13.5149 24.9842C12.5221 26.6135 14.3865 28.4779 16.0158 27.4851C16.2603 27.3359 16.5367 27.2465 16.8223 27.2243C17.108 27.202 17.3948 27.2476 17.6595 27.3572C17.9242 27.4668 18.1593 27.6374 18.3456 27.855C18.5319 28.0727 18.6642 28.3313 18.7316 28.6097C19.1817 30.4634 21.8192 30.4634 22.2681 28.6097C22.3358 28.3314 22.4681 28.073 22.6545 27.8555C22.8408 27.638 23.0759 27.4675 23.3405 27.358C23.6051 27.2484 23.8919 27.2028 24.1774 27.2249C24.463 27.247 24.7393 27.3361 24.9839 27.4851C26.6132 28.4779 28.4776 26.6135 27.4848 24.9842C27.3359 24.7396 27.2467 24.4633 27.2246 24.1777C27.2025 23.8922 27.2481 23.6054 27.3577 23.3408C27.4672 23.0762 27.6377 22.8411 27.8552 22.6548C28.0727 22.4684 28.3311 22.336 28.6094 22.2684C30.4631 21.8183 30.4631 19.1808 28.6094 18.7319C28.331 18.6645 28.0724 18.5322 27.8547 18.3459C27.6371 18.1596 27.4665 17.9245 27.3569 17.6598C27.2473 17.3951 27.2017 17.1083 27.224 16.8226C27.2462 16.537 27.3356 16.2606 27.4848 16.0161C28.4776 14.3868 26.6132 12.5224 24.9839 13.5152C24.7394 13.6644 24.463 13.7538 24.1774 13.776C23.8917 13.7983 23.6049 13.7527 23.3402 13.6431C23.0755 13.5335 22.8404 13.3629 22.6541 13.1453C22.4678 12.9276 22.3355 12.669 22.2681 12.3906L22.2693 12.3894ZM20.4999 24.0627C21.4447 24.0627 22.3508 23.6874 23.019 23.0193C23.6871 22.3511 24.0624 21.445 24.0624 20.5001C24.0624 19.5553 23.6871 18.6492 23.019 17.981C22.3508 17.3129 21.4447 16.9376 20.4999 16.9376C19.555 16.9376 18.6489 17.3129 17.9807 17.981C17.3126 18.6492 16.9373 19.5553 16.9373 20.5001C16.9373 21.445 17.3126 22.3511 17.9807 23.0193C18.6489 23.6874 19.555 24.0627 20.4999 24.0627V24.0627Z"></path>
                        </svg>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default HaidthBookHeader;