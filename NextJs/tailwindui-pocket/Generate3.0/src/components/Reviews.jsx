'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { useInView } from 'framer-motion'

import { Container } from '@/components/Container'

const reviews = [
  {
    title: 'Transforming Food Waste into Skincare Treasure',
    body: 'Discover how innovative brands are turning food waste into powerful skincare ingredients, revolutionizing the industry with sustainable practices.',
    author: 'August 27, 2024',
    image: 'https://generate.nextatlas.com/_next/image?url=https%3A%2F%2Fnextimages.nextatlas.com%2Fv4%2F25467b998407492299a49ff2b1f42f59%3Fw%3D450%26source%3Dhttps%253A%252F%252Fstatic-uploader.nextatlas.com%252Fget%252Fpublic%252Fgenerate_feed%252Fdc143e52-f2ff-41f9-9479-5387d1d3c8d1%252F&w=3840&q=75',
  },
  {
    title: 'You need this app.',
    body: 'I didn’t understand the stock market at all before Pocket. I still don’t, but at least I’m rich now.',
    author: 'August 27, 2024',
    image: 'https://generate.nextatlas.com/_next/image?url=https%3A%2F%2Fnextimages.nextatlas.com%2Fv4%2F688a1d10b7c8460fb8f9d3358e92df9f%3Fw%3D450%26source%3Dhttps%253A%252F%252Fstatic-uploader.nextatlas.com%252Fget%252Fpublic%252Fgenerate_feed%252Fb9810014-0767-4d25-8c9a-ba2395f33d66%252F&w=3840&q=75',
  },
  {
    title: 'This shouldn’t be legal.',
    body: 'Pocket makes it so easy to win big in the stock market that I can’t believe it’s actually legal.',
    author: 'August 27, 2024',
    image: 'https://generate.nextatlas.com/_next/image?url=https%3A%2F%2Fnextimages.nextatlas.com%2Fv4%2F856c85284db44f9383f790c6c5dc982c%3Fw%3D450%26source%3Dhttps%253A%252F%252Fstatic-uploader.nextatlas.com%252Fget%252Fpublic%252Fgenerate_feed%252F50bbc7c7-ffdd-4e2d-add3-1ea83b3c3d8a%252F&w=3840&q=75',
  },
  {
    title: 'Screw financial advisors.',
    body: 'I barely made any money investing in mutual funds. With Pocket, I’m doubling my net-worth every single month.',
    author: 'August 27, 2024',
    image: 'https://generate.nextatlas.com/_next/image?url=https%3A%2F%2Fnextimages.nextatlas.com%2Fv4%2Fc531dc04911a4307b35f31a48a1e43de%3Fw%3D450%26source%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fphoto-1671981200629-014c03829abb%253Fcrop%253Dentropy%2526cs%253Dtinysrgb%2526fit%253Dmax%2526fm%253Djpg%2526ixid%253DM3w2MjQ5Mzh8MHwxfHNlYXJjaHw2fHxoZWFsdGh5JTIwc25hY2tzfGVufDB8MHx8fDE3MjQ3MTI5MTJ8MA%2526ixlib%253Drb-4.0.3%2526q%253D80%2526w%253D1080&w=3840&q=75',
  },
  {
    title: 'I love it!',
    body: 'I started providing insider information myself and now I get new insider tips every 5 minutes. I don’t even have time to act on all of them. New Lamborghini is being delivered next week!',
    author: 'August 27, 2024',
    image: 'https://generate.nextatlas.com/_next/image?url=https%3A%2F%2Fnextimages.nextatlas.com%2Fv4%2F04b84934cc2447069b079dd7d153ceea%3Fw%3D450%26source%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fphoto-1509914398892-963f53e6e2f1%253Fcrop%253Dentropy%2526cs%253Dtinysrgb%2526fit%253Dmax%2526fm%253Djpg%2526ixid%253DM3w2MjQ5Mzh8MHwxfHNlYXJjaHwxOXx8bWVudGFsJTIwY2xhcml0eSUyMHN1cmZpbmd8ZW58MHwwfHx8MTcyNDcyMDQ2OHww%2526ixlib%253Drb-4.0.3%2526q%253D80%2526w%253D1080&w=3840&q=75',
  },
  {
    title: 'Too good to be true.',
    body: 'I was making money so fast with Pocket that it felt like a scam. But I sold my shares and withdrew the money and it’s really there, right in my bank account. This app is crazy!',
    author: 'August 27, 2024',
    image: 'https://generate.nextatlas.com/_next/image?url=https%3A%2F%2Fnextimages.nextatlas.com%2Fv4%2Fa2ec7a2a0bf54912bc66bea80d0eb54b%3Fw%3D450%26source%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fphoto-1487700160041-babef9c3cb55%253Fcrop%253Dentropy%2526cs%253Dtinysrgb%2526fit%253Dmax%2526fm%253Djpg%2526ixid%253DM3w2MjQ5Mzh8MHwxfHNlYXJjaHw3fHxuYXR1cmFsJTIwbGlnaHQlMjBkZWNvcnxlbnwwfDB8fHwxNzI0NzIzMDkxfDA%2526ixlib%253Drb-4.0.3%2526q%253D80%2526w%253D1080&w=3840&q=75',
  },
  {
    title: 'Wish I could give 6 stars',
    body: 'This is literally the most important app you will ever download in your life. Get on this before it’s so popular that everyone else is getting these tips too.',
    author: 'August 27, 2024',
    image: 'https://generate.nextatlas.com/_next/image?url=https%3A%2F%2Fnextimages.nextatlas.com%2Fv4%2Fbebfa5683cfe483fbb356dc542adaed9%3Fw%3D450%26source%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fphoto-1554322662-abedea4ed292%253Fcrop%253Dentropy%2526cs%253Dtinysrgb%2526fit%253Dmax%2526fm%253Djpg%2526ixid%253DM3w2MjQ5Mzh8MHwxfHNlYXJjaHwyfHxhbmNpZW50JTIwYXJjaGl0ZWN0dXJlfGVufDB8MHx8fDE3MjQ3MzYzNTl8MA%2526ixlib%253Drb-4.0.3%2526q%253D80%2526w%253D1080&w=3840&q=75',
  },
  {
    title: 'Bought an island.',
    body: 'Yeah, you read that right. Want your own island too? Get Pocket.',
    author: 'August 27, 2024',
    image: 'https://generate.nextatlas.com/_next/image?url=https%3A%2F%2Fnextimages.nextatlas.com%2Fv4%2F9b575759082b405ca4dbbb635191a9a9%3Fw%3D450%26source%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fphoto-1464226184884-fa280b87c399%253Fcrop%253Dentropy%2526cs%253Dtinysrgb%2526fit%253Dmax%2526fm%253Djpg%2526ixid%253DM3w2MjQ5Mzh8MHwxfHNlYXJjaHwxNnx8Z291cm1ldCUyMGZvb2QlMjBzdG9yZXxlbnwwfDB8fHwxNzI0MTE3NzU0fDA%2526ixlib%253Drb-4.0.3%2526q%253D80%2526w%253D1080&w=3840&q=75',
  },
  {
    title: 'No more debt!',
    body: 'After 2 weeks of trading on Pocket I was debt-free. Why did I even go to school at all when Pocket exists?',
    aauthor: 'August 27, 2024',
    image: 'https://generate.nextatlas.com/_next/image?url=https%3A%2F%2Fnextimages.nextatlas.com%2Fv4%2F9cd340a18f734651ac9943bd3a771c77%3Fw%3D450%26source%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fphoto-1585250003309-694ff34512d7%253Fcrop%253Dentropy%2526cs%253Dtinysrgb%2526fit%253Dmax%2526fm%253Djpg%2526ixid%253DM3w2MjQ5Mzh8MHwxfHNlYXJjaHwxMnx8SW5zdGFncmFtJTIwc2hvcHBpbmd8ZW58MHwwfHx8MTcyNDEyMTE4MXww%2526ixlib%253Drb-4.0.3%2526q%253D80%2526w%253D1080&w=3840&q=75',
  },
  {
    title: 'I’m 13 and I’m rich.',
    body: 'I love that with Pocket’s transaction anonymization I could sign up and start trading when I was 12 years old. I had a million dollars before I had armpit hair!',
    author: 'August 27, 2024',
    image: 'https://generate.nextatlas.com/_next/image?url=https%3A%2F%2Fnextimages.nextatlas.com%2Fv4%2Fc8cd836222d346cba8047d1ce94d08a8%3Fw%3D450%26source%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fphoto-1619037961428-e6410a7afd38%253Fcrop%253Dentropy%2526cs%253Dtinysrgb%2526fit%253Dmax%2526fm%253Djpg%2526ixid%253DM3w2MjQ5Mzh8MHwxfHNlYXJjaHw1fHx3ZWFyYWJsZSUyMHRlY2hub2xvZ3klMjBoZWFsdGh8ZW58MHwwfHx8MTcyNDM2MTM2OHww%2526ixlib%253Drb-4.0.3%2526q%253D80%2526w%253D1080&w=3840&q=75',
  },
  {
    title: 'Started an investment firm.',
    body: 'I charge clients a 3% management fee and just throw all their investments into Pocket. Easy money!',
    author: 'August 27, 2024',
    image: 'https://generate.nextatlas.com/_next/image?url=https%3A%2F%2Fnextimages.nextatlas.com%2Fv4%2Fc3c542bf8b9849049d3534df429e4fe5%3Fw%3D450%26source%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fphoto-1582407123556-59f95920eeaa%253Fcrop%253Dentropy%2526cs%253Dtinysrgb%2526fit%253Dmax%2526fm%253Djpg%2526ixid%253DM3w2MjQ5Mzh8MHwxfHNlYXJjaHw1fHxzdXN0YWluYWJsZSUyMHBhY2thZ2luZ3xlbnwwfDB8fHwxNzI0Mzc0ODU5fDA%2526ixlib%253Drb-4.0.3%2526q%253D80%2526w%253D1080&w=3840&q=75',
  },
  {
    title: 'It’s like a superpower.',
    body: 'Every tip Pocket has sent me has paid off. It’s like playing Blackjack but knowing exactly what card is coming next!',
    author: 'August 27, 2024',
    image: 'https://generate.nextatlas.com/_next/image?url=https%3A%2F%2Fnextimages.nextatlas.com%2Fv4%2F00aeed21522a4a7eb23e056b8416ada9%3Fw%3D450%26source%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fphoto-1596573701265-3ba6f1b5c07e%253Fcrop%253Dentropy%2526cs%253Dtinysrgb%2526fit%253Dmax%2526fm%253Djpg%2526ixid%253DM3w2MjQ5Mzh8MHwxfHNlYXJjaHwxfHxCdXJuaW5nJTIwTWFufGVufDB8MHx8fDE3MjQzODczOTF8MA%2526ixlib%253Drb-4.0.3%2526q%253D80%2526w%253D1080&w=3840&q=75',
  },
  {
    title: 'Quit my job.',
    body: 'I downloaded Pocket three days ago and quit my job today. I can’t believe no one else thought to build a stock trading app that works this way!',
    author: 'August 27, 2024',
    image: 'https://generate.nextatlas.com/_next/image?url=https%3A%2F%2Fnextimages.nextatlas.com%2Fv4%2F70da1f941ab1485daa8e51c316d64590%3Fw%3D450%26source%3Dhttps%253A%252F%252Fstatic-uploader.nextatlas.com%252Fget%252Fpublic%252Fgenerate_feed%252Fa7a0560d-965f-49f3-914a-950bad40d885%252F&w=3840&q=75',
  },
  {
    title: 'Don’t download this app',
    body: 'Unless you want to have the best life ever! I am literally writing this from a yacht.',
    author: 'August 27, 2024',
    image: 'https://generate.nextatlas.com/_next/image?url=https%3A%2F%2Fnextimages.nextatlas.com%2Fv4%2Fdf413894227548108e7b4398690d49c7%3Fw%3D450%26source%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fphoto-1653611540493-b3a896319fbf%253Fcrop%253Dentropy%2526cs%253Dtinysrgb%2526fit%253Dmax%2526fm%253Djpg%2526ixid%253DM3w2MjQ5Mzh8MHwxfHNlYXJjaHwxNXx8TWVkaXRlcnJhbmVhbiUyMGN1aXNpbmV8ZW58MHwwfHx8MTcyMzc2MTY1Nnww%2526ixlib%253Drb-4.0.3%2526q%253D80%2526w%253D1080&w=3840&q=75',
  },
]

function Review({ title, body, author, image, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      {/* Aggiunta dell'immagine */}
      {image && (
        <img src={image} alt={title} className="w-full h-auto rounded-lg mb-4" />
      )}
      <blockquote className="text-gray-900">
        <p className="text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}


function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({ reviews, className, reviewClassName, msPerPixel = 0 }) {
  let columnRef = useRef(null)
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    if (!columnRef.current) {
      return
    }

    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef(null)
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  let column1 = columns[0]
  let column2 = columns[1]
  let column3 = splitArray(columns[2], 2)

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= column1.length + column3[0].length &&
                  'md:hidden',
                reviewIndex >= column1.length && 'lg:hidden',
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? 'lg:hidden' : ''
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  )
}

export function Reviews() {
  const placeholders = [
    "What’s trending in beauty?",
    "Current trends in electric vehicle features?",
    "Solar energy adoption?",
    "What are personas for podcast listeners?",
    "Explore sustainable packaging innovations",
  ];

  const [currentPlaceholder, setCurrentPlaceholder] = useState(placeholders[0]);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 3000); // Change placeholder every 3 seconds

    return () => clearInterval(intervalId);
  }, [placeholders.length]);

  useEffect(() => {
    setCurrentPlaceholder(placeholders[placeholderIndex]);
  }, [placeholderIndex, placeholders]);

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pb-16 pt-20 sm:pb-24 sm:pt-32"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-semibold tracking-tight text-gray-800 sm:text-center"
        >
          Try Generate Now!
        </h2>
        <div className="relative w-1/2 mx-auto mt-4">
          <input
            type="text"
            placeholder={currentPlaceholder}
            className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 bg-gray-100 text-gray-600 shadow-inner focus:outline-none transition-all duration-300"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
        <ReviewGrid />
      </Container>
    </section>
  );
}