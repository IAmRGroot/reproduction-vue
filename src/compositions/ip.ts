import { ref } from "@vue/composition-api";

const edit_me = 'edit me';

const ip = ref(null as string|null);

const fetchIp = async () => {
    const response = await fetch("https://ifconfig.me", {headers: {'Accept': 'application/json'}});

    ip.value = await response.text();
}

export const useIp = () => ({
    ip,
    fetchIp,
});