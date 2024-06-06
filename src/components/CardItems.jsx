function CardItems() {
  const list = [
    {
      title: "Cort Toe Bag",
      img: "https://notebooktherapy.com/cdn/shop/products/d1e57ac3375c0ca5181c91d343e7d747_300x.png?v=1572456405",
      price: "$32.50 CAD",
    },
    {
      title: "Tsuki 'Our Stories' Washi Tape",
      img: "https://notebooktherapy.com/cdn/shop/files/01-our_stories-washi-carousel_300x.jpg?v=1684859938",
      price: "$54.48 CAD",
    },
    {
      title: "Tsuki Bullet Journal Stencill Set",
      img: "https://notebooktherapy.com/cdn/shop/products/0120_00763_300x.jpg?v=1672662415",
      price: "$10.00",
    },
    {
      title: "Tsuki 'Maple Moon' Limited Bullet Journal",
      img: "https://notebooktherapy.com/cdn/shop/files/02-maple_journey-notebook-moon-carousel_300x.jpg?v=1693431830",
      price: "$64.48 CAD",
    },
    {
      title: "Tsuki ‘Lunar Mystery’ Washi Tape Set ☾",
      img: "https://notebooktherapy.com/cdn/shop/files/01-lunar_mystery-washi-carousel_300x.jpg?v=1696296764",
      price: "$15.70",
    },
    {
      title: "Hinoki - ‘Travel Essentials’ Print-On Sticker Set",
      img: "https://notebooktherapy.com/cdn/shop/files/01-hinoki_cymk-sticker-carousel_fd5cb293-82ff-4722-b468-c381a1cc2a7c_300x.jpg?v=1715429218",
      price: "$8.00",
    },
    {
      title: "Tsuki Pop-up Pencil Case ☾",
      img: "https://notebooktherapy.com/cdn/shop/products/5U7A6678copy_300x.jpg?v=1652370200",
      price: "$7.50",
    },
    {
      title:
        "Tsuki Four Seasons: Winter Collector’s Edition 2023 Bullet Journal ☾",
      img: "https://notebooktherapy.com/cdn/shop/files/00-four_seasons_2023_winter-notebook-carousel_300x.jpg?v=1700885373",
      price: "$12.20",
    },
  ];
  return (
    <>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 w-11/12	mx-auto">
        {list.map((item, index) => (
          <div
            key={index}
            className="mb-16 flex flex-col items-center cursor-pointer"
          >
            <img alt={item.title} src={item.img} className="w-76 h-72" />
            <h5 className="text-sm font-semibold w-60 my-3 text-center text-slate-800">
              {item.title}
            </h5>
            <p className="text-pink-300 font-bold text-lg">{item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardItems;
