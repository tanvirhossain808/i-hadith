/* eslint-disable react/prop-types */


const SearchBar = ({ bg, mt, w, border, placeholder, h }) => {
    return (
        <>

            <form className={`sm-max:w-fit `} action="">

                <div className={`relative ${w} ${h && h} h-[55px] ${mt}  border-[#DEE1E5] ${border && "border-2"} 	 text  text md-max:w-10 md-max:h-10 flex items-center  p-4 justify-between rounded-lg search-input ${bg}`}>
                    <div className="md-max:block">
                        <svg className=" fill-[#5c5c5c]  lg-min:absolute  top-[1.1rem]" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.8174 13.9331L11.0867 10.2025C12.1034 8.95911 12.6032 7.37254 12.4829 5.77096C12.3625 4.16938 11.6312 2.67532 10.4402 1.59781C9.2492 0.520305 7.68959 -0.0582065 6.084 -0.0180617C4.47841 0.0220832 2.94966 0.677813 1.81398 1.81349C0.678301 2.94918 0.0225715 4.47792 -0.0175734 6.08351C-0.0577183 7.68911 0.520793 9.24871 1.5983 10.4397C2.67581 11.6307 4.16987 12.3621 5.77145 12.4824C7.37303 12.6027 8.9596 12.1029 10.203 11.0862L13.9336 14.8169C14.0515 14.9307 14.2094 14.9937 14.3732 14.9923C14.5371 14.9909 14.6939 14.9251 14.8097 14.8092C14.9256 14.6934 14.9913 14.5366 14.9928 14.3727C14.9942 14.2089 14.9312 14.051 14.8174 13.9331ZM6.25047 11.25C5.26157 11.25 4.29487 10.9567 3.47262 10.4073C2.65038 9.85793 2.00951 9.07703 1.63108 8.1634C1.25264 7.24977 1.15362 6.24444 1.34655 5.27453C1.53947 4.30463 2.01568 3.41371 2.71494 2.71445C3.4142 2.01519 4.30512 1.53899 5.27502 1.34606C6.24493 1.15313 7.25026 1.25215 8.16389 1.63059C9.07752 2.00903 9.85842 2.64989 10.4078 3.47213C10.9572 4.29438 11.2505 5.26108 11.2505 6.24999C11.249 7.57561 10.7217 8.84652 9.78436 9.78388C8.847 10.7212 7.5761 11.2485 6.25047 11.25Z"></path>
                        </svg>

                    </div>
                    <div className="input">
                        <input type="text" placeholder={placeholder} className={`md-max:hidden   bg-transparent  p-3 rounded-lg focus:outline-0 focus:text-black ${!border && "w-[300px]"}`} />


                    </div>
                    {/* <input type="text" id="search_box" placeholder="Search Hadith" className="md-max:hidden border-[#DEE1E5] dark:bg-hadith-dark-card text-hadith-offblack border-2 dark:border-dark-cat-border p-3 rounded-lg focus:outline-0 focus:text-black dark:text-hadith-deepoffwhite pl-10 pr-10" value /> */}
                </div>


            </form>
        </>
    );
};

export default SearchBar;