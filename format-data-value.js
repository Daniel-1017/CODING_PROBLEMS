/* 
You get input data as a number (of megabytes). Your task is to convert it to the string adding 'MB' or 'GB' or 'TB' correctly.

Find the details below:

900 -> '900MB'
1900 -> '1GB 900MB'
568200 -> '568GB 200MB'
1000000 -> '1TB'
1234567 -> '1TB 234GB 567MB'
P.S. 0 <= input number < 1000000000
*/

const formatDataValue = data => {
    const units = ["MB", "GB", "TB"];
    let result = "";

    for (let i = units.length - 1; i >= 0; i--) {
        const unit = units[i];
        const value = Math.floor(data / Math.pow(1000, i));

        if (value > 0) {
            result += `${value}${unit} `;
            data %= Math.pow(1000, i);
        }
    }

    return result.trim() || "0MB";
};
