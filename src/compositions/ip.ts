import { ref } from "@vue/composition-api";

const ip = ref(null as string|null);

const forceIp = () => {
    if (ip.value === null) {
        throw new Error("IP is not test");
    }

    return ip.value;
}

const fetchIp = async () => {
    const response = await fetch("https://ifconfig.me", {headers: {'Accept': 'application/json'}});

    ip.value = await response.text();
}

export const useIp = () => ({
    ip,
    fetchIp,
    forceIp
});