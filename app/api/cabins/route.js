import { getBookedDatesByCabinId, getCabin } from '@/app/_lib/data-service';

export async function GET(request, { params }) {
  if (!params || !params.cabinId) {
    return Response.json({ message: 'cabinId is required' }, { status: 400 });
  }

  const { cabinId } = params;

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);

    return Response.json({ cabin, bookedDates });
  } catch (error) {
    console.error('Error fetching data:', error);
    return Response.json({ message: 'Cabin not found' }, { status: 404 });
  }
}
