import Link from "next/link";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

const ClinicItemNew = (props) => {
  const {
    name,
    description,
    slug,
    features,
    featuring,
    location,
    images,
    featured,
    city,
  } = props.clinicData

  const { language } = props;

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

    */
    <Link href={`/clinics/${slug}`} className="hidden">
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src={`/images/clinics/${slug}/1.jpg`}
            height={160}
            alt="clinic thumbnail"
            />
          {/* <ImageGallery
            items={images}
            showThumbnails={false}
            showPlayButton={false}
            showFullscreenButton={false}
          /> */}
        </Card.Section>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{name}</Text>
          {featured && (
            <Badge color="green" variant="dark">
              Recommended!!
            </Badge>
          )}
        </Group>
        {/* 
        <Badge color="blue" variant="light">
          {featuring}
        </Badge> */}
        {features.map((feature) => {
          return (
            <Badge color="blue" variant="light" key={feature}>
              {feature}
            </Badge>
          );
        })}
        {/* <Text size="sm" color="dimmed">
            {description}
        </Text> */}
        <Group className="mt-2">
          <Image
            src="/images/icons/location.svg"
            height={12}
            width={12}
            alt="city"
          />
          {city}
        </Group>
        <Button
          variant="light"
          className="text-brightPrimary hover:bg-purple-100"
          fullWidth
          mt="md"
          radius="md"
        >
          {(!language || language === "English") && (
            <Link href={`/clinics/${slug}`}>See Details</Link>
          )}
          {language === "German" && (
            <Link href={`/clinics/${slug}`}>Siehe Einzelheiten</Link>
          )}

          {language === "Arabic" && (
            <Link href={`/clinics/${slug}`}>انظر التفاصيل</Link>
          )}

          {language === "Hebrew" && (
            <Link href={`/clinics/${slug}`}>ראה פרטים</Link>
          )}

          {language === "Russian" && (
            <Link href={`/clinics/${slug}`}>Смотрите подробности</Link>
          )}

          {language === "Spanish" && (
            <Link href={`/clinics/${slug}`}>Ver detalles</Link>
          )}

          {language === "Italian" && (
            <Link href={`/clinics/${slug}`}>Guarda i detagli</Link>
          )}
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
