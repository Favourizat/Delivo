


export const lookupLocation = async (req, res) => {
    // Reads query parameters sent to your backend from the Admin dashboard
    try {
        const { place } = req.query

        if (!place || !place.trim()) {
            return res.status(400).json({
                message: "Please provide a location"
            })
        }

        const response = await fetch(
            `https://api.mapbox.com/search/geocode/v6/forward?q=${encodeURIComponent(
                place
            )}&access_token=${process.env.MAPBOX_ACCESS_TOKEN}`
        )

        const data = await response.json()

        if (!response.ok) {
            return res.status(response.status).json({
                message: "Location lookup failed"
            })
        }

        const feature = data.features?.[0]

        if (!feature) {
            return res.status(404).json({
                message: "Location not found. Try a more specific address."
            })
        }

        const [longitude, latitude] = feature.geometry.coordinates

        return res.status(200).json({
            place: feature.properties.full_address || place,
            latitude,
            longitude
        })
    } catch (error) {
        console.error("Location lookup error:", error)

        return res.status(500).json({
            message: "Unable to lookup this location"
        })
    }
}