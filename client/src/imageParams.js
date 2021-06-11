function imageParams(data, size = 100) {
    return new Promise((res, rej) => {
        if (typeof(data) === 'string') {
            solve(data).then(params => res(params));
        } else {
            if (!data.length) res(data);
            
            for (let i = 0; i < data.length; ++i){
                solve(data[i].picture).then((params) => {
                    data[i].params = params;
                    
                    if (i+1 === data.length) res(data);
                });
            }
        }

        function solve(src) {
            let img = document.createElement('img');
            img.src = src;
            return new Promise((resolve) => {
                img.onload = () => { 
                    resolve(
                        img.width >= img.height ? 
                        {height: `${size}%`, minWidth: `${size}%`, width: 'none', minHeight: 'none'} 
                        : 
                        {height: 'none', minWidth: 'none', width: `${size}%`, minHeight: `${size}%`}
                    );
                }
            });
        }
    });
}

export default imageParams;