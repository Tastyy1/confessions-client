import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Tab } from "@headlessui/react";
import { useErrorHandler } from "react-error-boundary";
import { getAllPosts, getTrendingPosts } from "../api/services/post";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  const handleError = useErrorHandler();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const recentPosts = useQuery({
    queryKey: ["posts"],
    queryFn: getAllPosts,
    onError: handleError,
  });

  const trendingPosts = useQuery({
    queryKey: ["trendingPosts"],
    queryFn: getTrendingPosts,
    onError: handleError,
    enabled: selectedIndex === 1,
  });

  const handleRefresh = () => {
    // Sayfa yenileme işlemini gerçekleştir
    window.location.reload(true);
  };

  return (
    <>
      <Header />

      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="flex space-x-1 bg-blue-400/20 p-1 sm:rounded-xl">
          <Tab className="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 ui-selected:bg-white ui-selected:shadow">
          Son Mesajlar
          </Tab>
          <Tab className="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 ui-selected:bg-white ui-selected:shadow">
            Trendler
          </Tab>
        </Tab.List>

        <div className="flex items-center justify-center p-4">
        <button
          onClick={handleRefresh}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Yenile
        </button>
      </div>

        <Tab.Panels className="mt-2">
          <Tab.Panel className="rounded-xl focus:outline-none">
            {recentPosts.isLoading ? (
              <Loader />
            ) : (
              !recentPosts.isError && (
                <main className="flex flex-col space-y-4 bg-slate-400/20 p-4">
                  {recentPosts.data.data.map((post) => (
                    <Card key={post._id} post={post} />
                  ))}
                </main>
              )
            )}
          </Tab.Panel>
          <Tab.Panel className="rounded-xl focus:outline-none">
            {trendingPosts.isLoading ? (
              <Loader />
            ) : (
              !trendingPosts.isError && (
                <main className="flex flex-col space-y-4 bg-slate-400/20 p-4">
                  {trendingPosts.data.data.map((post) => (
                    <Card key={post._id} post={post} />
                  ))}
                </main>
              )
            )}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      <Footer />
    </>
  );
}
