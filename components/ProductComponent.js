export const ProductComponent = (product) => {
  const { image, title, price } = product;
  return `
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg object-fill w-[700px] h-[320px]" src="${
          image ||
          "https://th.bing.com/th/id/OIP.sWCvltMZF_s3mjA5sL-RdgHaE8?rs=1&pid=ImgDetMain"
        }" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${title||"No Title"}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">$${price||"No Price"}</p>
    </div>
</div>
`;
};
