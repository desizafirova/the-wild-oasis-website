export async function GET(request, { params }) {
  if (!params || !params.cabinId) {
    return new Response(JSON.stringify({ message: 'Missing cabinId' }), {
      status: 400,
    });
  }

  const { cabinId } = params;

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);

    return new Response(JSON.stringify({ cabin, bookedDates }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    return new Response(JSON.stringify({ message: 'Cabin not found' }), {
      status: 404,
    });
  }
}
