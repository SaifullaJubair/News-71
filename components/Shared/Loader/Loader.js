import { Button, Spinner } from 'flowbite-react';
import React from 'react';

const Loader = () => {
    return (      
            <div className="flex flex-row gap-3 items-center justify-center">
                <Button>
                    <Spinner aria-label="Spinner button example" />
                    <span className="pl-3">
                        Loading...
                    </span>
                </Button>
            </div>     
    );
};

export default Loader;