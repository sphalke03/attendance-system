document.getElementById("checkInBtn").addEventListener("click", async function() {
    const response = await fetch("../backend/api.php", {
        method: "POST",
        body: new URLSearchParams({ check_in: true, user_id: 1, location: "Office" }),
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
    });

    const data = await response.json();
    document.getElementById("status").innerText = data.message || data.error;
});

document.getElementById("checkOutBtn").addEventListener("click", async function() {
    const response = await fetch("../backend/api.php", {
        method: "POST",
        body: new URLSearchParams({ check_out: true, user_id: 1 }),
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
    });

    const data = await response.json();
    document.getElementById("status").innerText = data.message || data.error;
});
