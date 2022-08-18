import Link from "next/link";
//import Image from "next/image"
import ImageGallery from "react-image-gallery";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

/* import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react"; */

/* const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
  },
]; */

const ClinicItemNew = (props) => {
  const { name, description, slug, features, featuring, location, images, featured } =
    props.clinicData;

  return (
    /*  <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100 my-6 mx-4 md:my-8">
      <div className="">
        <div className="w-full sm:h-full">
          <ImageGallery
            items={images}
            showThumbnails={false}
            showPlayButton={false}
            showFullscreenButton={false}
          />
        </div>
      </div>

      <Link href={`/clinics/${slug}`}>
        <a href="#">
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              {name}
            </h5>
            <p className="mb-3 font-normal text-gray-700">{description}</p>
          </div>
          <div className="mx-5">
            {features.find((feature) => feature.toLowerCase() === "hair transplant") && (
              <span className="bg-red-400 mb-3 text-gray-800 text-xs font-medium inline-flex items-center px-3 py-1.5 rounded-lg mr-2">
                Hair transplant
              </span>
            )}
            {features.find((feature) => feature.toLowerCase() === "ivf") && (
              <span className="bg-blue-400 mb-3 text-gray-800 text-xs font-medium inline-flex items-center px-3 py-1.5 rounded-lg mr-2">
                IVF
              </span>
            )}
            {features.find((feature) => feature.toLowerCase() === "fat removal") && (
              <span className="bg-purple-400 mb-3 text-gray-800 text-xs font-medium inline-flex items-center px-3 py-1.5 rounded-lg mr-2">
                Fat Removal
              </span>
            )}
            {features.find(feature => feature.toLowerCase()==="cosmetic surgery") && (
            <span className="bg-yellow-400 mb-3 text-gray-800 text-xs font-medium inline-flex items-center px-3 py-1.5 rounded-lg mr-2">
              Cosmetic surgery
            </span>)}
            {features.find(feature => feature.toLowerCase()==="non-cosmetic surgery") && (
            <span className="bg-pink-400 mb-3 text-gray-800 text-xs font-medium inline-flex items-center px-3 py-1.5 rounded-lg mr-2">
              Non-Cosmetic surgery
            </span>)}
          </div>
        </a>
      </Link>
    </div> */
    <Link href={`/clinics/${slug}`} className="hidden">
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          {/* <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        /> */}
          <ImageGallery
            items={images}
            showThumbnails={false}
            showPlayButton={false}
            showFullscreenButton={false}
          />
        </Card.Section>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{name}</Text>
          {featured && (
            <Badge color="pink" variant="light">
              Recommended!!
            </Badge>
          )}
        </Group>
        <Badge color="blue" variant="light">
          {featuring}
        </Badge>
        <Text size="sm" color="dimmed">
          {description}
        </Text>
        <Group>
          <Image src="/images/location.svg" height={12} width={12} alt="location" />
          {location}
        </Group>
        <Button variant="light" color="green" fullWidth mt="md" radius="md">
          <Link href={`/clinics/${slug}`}>See Details</Link>
        </Button>
      </Card>
    </Link>

    /*     <Card className="w-full">
      <CardHeader color="blue" className="relative h-56">
        <img
          src="./photos/hero.jpg"
          alt="img-blur-shadow"
          className="h-full w-full"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          Cozy 5 Stars Apartment
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to "Naviglio" where you can enjoy the main night life in
          Barcelona.
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">$899/night</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
        <Image src="/images/location.svg" height={12} width={12} />

          Barcelona, Spain
        </Typography>
      </CardFooter>
    </Card> */
  );
};

export default ClinicItemNew;
